export const login = (username, passwsord) => {
  if (username === "admin" && passwsord === "1234") {
    return {
      token: "fake-jwt",
      user: { name: "Admin" },
    };
  }
  throw new Error("Invalid username or password");
};



