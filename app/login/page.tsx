import { createSession } from "../../actions/sessions";

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";

    const email = formData.get("username") as string;

    if (!email) {
      console.log("no username found");
      return;
    }

    formData.append("grant_type", "password");

    const login = await fetch(`${process.env.API_PATH}/auth/login`, {
      body: formData,
      method: "POST",
    });

    const auth = await login.json();

    if (auth.error_code) {
      return;
    }

    await createSession(email, auth.access_token);
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="m-auto rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
        <div className="p-8 py-12 sm:p-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
            Sign in to your account
          </h2>
          <form action={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-gray-600 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="username"
                id="username"
                autoComplete="username"
                className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-gray-600 dark:text-gray-300"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-400 rounded-lg relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Sign In
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
