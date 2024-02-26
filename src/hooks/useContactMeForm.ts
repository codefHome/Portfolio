import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import ContactSchemaValidator, { ContactSchema } from "../schema/contantSchema";
import { ContactMeTypes } from "../types/types";
import { useSendMailMutation } from "../api/landingAPI";
import { useState } from "react";

const useContactMeForm = () => {
const[sendMail]=useSendMailMutation()
const[success,setSuccess]=useState<boolean>(false)
const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<ContactSchemaValidator>({
    mode: "onChange",

    defaultValues: {
      senderName: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(ContactSchema),
  });
  const onSubmit: SubmitHandler<ContactSchemaValidator> = async (
    data: ContactMeTypes
  ) => {
   const result= await sendMail(data)
   if(result){
   reset()
   setSuccess(true)
   setTimeout(() => {
    setSuccess(false)
   }, 1000);

   }
   console.log({data})
  };
return{
    errors,
    handleSubmit,
    control,
    onSubmit,
    success
}
}

export default useContactMeForm