import { Box, Progress } from "@chakra-ui/react";
import { useState } from "react";

const ProgressBar = () => {
  const [progress] = useState(30);
  return (
    <Box>
      <Progress value={progress} size="xs" colorScheme="tigerOrange" />
    </Box>
  );
};

export default ProgressBar;
