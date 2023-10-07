import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Img,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  UserCircle,
  EnvelopeSimple,
  Key,
  FacebookLogo,
  GoogleLogo,
} from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/middlewares/auth-middlewares";
import { types } from "../../redux/types/types";
import { showToast } from "../../lib/toast";
import BgLogin from "../../assets/commuication.jpg";

export const LoginPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const formik = useFormik({
    initialValues: { user: "", password: "" },
    onSubmit: async (values) => {
      const result = await dispatch(userLogin(values));
      console.log(result, "ini result");
      if (result === types.success) {
        nav("/home");
        showToast(
          toast,
          result,
          "Login Success",
          "success",
          "Login Failed",
          result
        );
      } else {
        toast({
          title: "failed",
          description: result?.message,
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      }
    },
  });

  return (
    <div className="col-auto">
      <div className="2xl:h-40 max-2xl:h-16"></div>
      <div className="flex justify-center  ">
        <div className="object-cover ml-8">
          <Img
            w="100"
            h="800"
            src={BgLogin}
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 1px 4px #4f02a8",
            }}
          ></Img>
        </div>

        <Container
          maxW="lg"
          py={{
            base: "12",
            md: "24",
          }}
          px={{
            base: "0",
            sm: "8",
          }}
          className="text-white"
          style={{ boxShadow: "1px 2px 9px white" }}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <Stack
                spacing={{
                  base: "2",
                  md: "3",
                }}
                textAlign="center"
              >
                <Heading
                  size={{
                    base: "xs",
                    md: "sm",
                  }}
                >
                  Log in to your account
                </Heading>
                <Text color="fg.muted">
                  Don't have an account? <Link href="#">Sign up</Link>
                </Text>
              </Stack>
            </Stack>
            <Box
              py={{
                base: "0",
                sm: "8",
              }}
              px={{
                base: "4",
                sm: "10",
              }}
              bg={{
                base: "transparent",
                sm: "bg.surface",
              }}
              boxShadow={{
                base: "none",
                sm: "md",
              }}
              borderRadius={{
                base: "none",
                sm: "xl",
              }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <div>
                      <FormLabel>
                        <div className="flex gap-1">
                          <UserCircle size={24} /> Username or{" "}
                          <EnvelopeSimple size={24} /> Email
                        </div>
                      </FormLabel>
                      <Input
                        onChange={(e) =>
                          formik.setFieldValue("user", e.target.value)
                        }
                      />
                    </div>

                    <div className="mt-4">
                      <FormLabel htmlFor="email">
                        <div className="flex gap-1">
                          <Key size={24} /> Password
                        </div>
                      </FormLabel>
                      <Input
                        onChange={(e) =>
                          formik.setFieldValue("password", e.target.value)
                        }
                      />
                    </div>
                  </FormControl>
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button onClick={formik.handleSubmit}>Sign in</Button>
                  <HStack>
                    <Divider />
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                      <div className="flex gap-2">
                        or continue with <FacebookLogo size={24} /> |{" "}
                        <GoogleLogo size={24} />
                      </div>
                    </Text>
                    <Divider />
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </div>
    </div>
  );
};
