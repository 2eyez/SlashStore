import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PASSWORD STRENGTH
  const getStrength = () => {
    const pwd = form.password;

    if (pwd.length < 6) return "Weak";
    if (pwd.match(/^(?=.*[A-Z])(?=.*\d).{6,}$/)) return "Strong";
    return "Medium";
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return setError("All fields are required");
    }

    if (form.password.length < 8) {
      return setError("Password must be at least 8 characters");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    setError("");
    console.log(form);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* ERROR */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg"
          value={form.name}
          onChange={handleChange}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          value={form.email}
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg pr-10"
            value={form.password}
            onChange={handleChange}
          />

          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg ${
              showPassword ? "ri-eye-off-line" : "ri-eye-line"
            }`}
          ></i>
        </div>

        {/* STRENGTH */}
        {form.password && (
          <p className="text-sm mb-3">
            Strength:{" "}
            <span
              className={`font-semibold ${
                getStrength() === "Weak"
                  ? "text-red-500"
                  : getStrength() === "Medium"
                  ? "text-yellow-500"
                  : "text-green-600"
              }`}
            >
              {getStrength()}
            </span>
          </p>
        )}

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg pr-10"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <i
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg ${
              showConfirmPassword ? "ri-eye-off-line" : "ri-eye-line"
            }`}
          ></i>
        </div>

        {/* BUTTON */}
        <button className="w-full bg-black text-white py-3 rounded-lg">
          Register
        </button>

        {/* LINK */}
        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;