import { types } from "../redux/types/types";

export const showToast = (
  toast,
  condition,
  success,
  success_dsc,
  failed,
  failed_desc
) => {
  if (condition === types.success)
    return toast({
      title: success,
      description: success_dsc,
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });

  toast({
    title: failed,
    description: failed_desc,
    status: "error",
    duration: 1500,
    isClosable: true,
    position: "top",
  });
};
