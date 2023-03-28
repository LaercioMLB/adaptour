import { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

interface InputTextProps {
  label: string;
  placeholder?: string;
}

function InputText({ label, placeholder }: InputTextProps) {
  return (
    <Box mt={8}>
      <Box textAlign="left" fontWeight={500}>
        {label}
      </Box>
      <Input variant="flushed" placeholder={placeholder} />
    </Box>
  );
}

export default InputText;
