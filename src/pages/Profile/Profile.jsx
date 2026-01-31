
import { useEffect, useState } from "react";
import navbarProfile from "../../assets/navbar-profile.png";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  //  GET user data from backend after login
 useEffect(() => {
  fetch("http://localhost:3000/user/profile")
    .then(res => res.json())
    .then(data => setUser({
      name: data.name || "",
      email: data.email || "",
      mobile: data.mobile || "",
      address: data.address || "",
    }))
    .catch(err => console.log(err));
}, []);


  // handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //  Save changes
  const handleSubmit = (e) => {
    e.preventDefault();

    // update ...
    fetch("http://localhost:3000/user/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(() => alert("Profile Updated ✅"))
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-300 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6 relative">

        {/* Close icon */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 pb-6 border-b">
          <div className="relative">
            <img
              src={navbarProfile}
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs cursor-pointer">
              ✎
            </span>
          </div>

          <div>
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <ProfileRow
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <ProfileRow
            label="Email account"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled
          />

          <ProfileRow
            label="Mobile number"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            placeholder="Add mobile number"
          />

          <ProfileRow
            label="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Add your address"
          />

          <button
            type="submit"
            className="mt-6 bg-black hover:bg-black/90 hover:cursor-pointer text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

function ProfileRow({ label, ...props }) {
  return (
    <div className="flex items-center justify-between border-b pb-3">
      <label className="text-gray-600">{label}</label>
      <input
        className="text-right outline-none text-gray-800 placeholder-gray-400 disabled:bg-transparent"
        {...props}
      />
    </div>
  );
}
