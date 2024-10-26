import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { ContactMeProps } from "../types/types";
import { useAppSelector } from "../store/hooks";
import useContactMeForm from "../hooks/useContactMeForm";

const ContactMe = ({ targetRef }: ContactMeProps) => {
  const { isDark } = useAppSelector((state) => state.lading);
  const { errors, handleSubmit, onSubmit, control, success } =
    useContactMeForm();

  if (success) {
    return (
      <div className="w-full h-full">
        <img src="./mail.gif" alt="success message" />
      </div>
    );
  }
  return (
    <Box
      ref={targetRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        border: isDark ? "1px solid black" : "1px solid #fff",
        borderRadius: "15px",
        background: isDark ? "black" : "#ffffff",
      }}
      className="flex flex-col  mt-[10%] w-full ml-[-13%] lg:ml-0 self-center"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          width: "100%",
          border: isDark ? "1px solid #474747" : "1px solid #ffede9",
          // alignSelf: "center",
          borderRadius: "15px",
          background: isDark ? "#474747" : "#ffede9",
           p: "20px",
        }}
      >
        <Typography variant="caption" sx={{ mt: "10px", textAlign: "center" }}>
          Want to Contact Me!
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          Got a question or proposal, or just want to say hello? Go head.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 mt-10">
            <Controller
              name="senderName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  id="senderName"
                  placeholder="Your Name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors?.senderName}
                  helperText={
                    <FormHelperText sx={{ fontSize: "12px" }}>
                      {errors?.senderName?.message}
                    </FormHelperText>
                  }
                  sx={{ fontSize: "12px" }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  placeholder="Email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors?.email}
                  helperText={
                    <FormHelperText sx={{ fontSize: "12px" }}>
                      {errors?.email?.message}
                    </FormHelperText>
                  }
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="message"
                  type="text"
                  placeholder="Message here"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  error={!!errors?.message}
                  helperText={
                    <FormHelperText sx={{ fontSize: "12px" }}>
                      {errors?.message?.message}
                    </FormHelperText>
                  }
                  multiline
                />
              )}
            />
            <Button variant="contained" type="submit">
              Send Mail
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;
