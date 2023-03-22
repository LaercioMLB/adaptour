import { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

interface InputDateProps {
  label: string;
  placeholder?: string;
}

function InputDate({ label, placeholder }: InputDateProps) {
  return (
    <Box mt={10}>
      <Box textAlign="left" fontWeight={500}>
        {label}
      </Box>
      <Input
        variant="flushed"
        placeholder={placeholder}
        size="md"
        type="date"
      />
    </Box>
  );
}

export default InputDate;
