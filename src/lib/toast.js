import { types } from "../redux/types/types";

export const showToast = (
  toast,
  condition,
  success,
  success_dsc,
  failed,
  failed_desc,
  result
) => {
  if (condition === types.success) {
    return toast({
      title: success,
      description: success_dsc,
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  }

  return toast({
    title: failed,
    description: result?.message,
    status: "error",
    duration: 1000,
    isClosable: true,
    position: "top",
  });
};
