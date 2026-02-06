import { useState, useRef } from "react";
import { Info, Pencil } from "lucide-react";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profileImage: null,
  });

  const [draft, setDraft] = useState(user);

  // ✅ FILE INPUT REF
  const fileRef = useRef(null);

  const startEdit = () => {
    setDraft(user);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraft(user);
    setIsEditing(false);
  };

  const saveEdit = () => {
    setUser(draft);
    setIsEditing(false);
  };

  // ✅ HANDLE IMAGE SELECT
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setDraft({
      ...draft,
      profileImage: URL.createObjectURL(file),
    });
  };

  return (
    <>
      {/* PAGE HEADER */}
      <header className="h-14 border-b bg-white flex items-center px-6 font-semibold text-black">
        Settings
      </header>

      <div className="p-8 bg-gray-50 min-h-screen space-y-8">

        {/* ================= BASIC INFORMATION ================= */}
        <div className="bg-white rounded-2xl border">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center gap-2 font-semibold text-black">
              Basic Information
              <Info size={16} className="text-gray-400" />
            </div>

            {!isEditing ? (
              <button
                onClick={startEdit}
                className="bg-gray-200 px-4 py-1.5 rounded-md text-sm text-black"
              >
                Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={saveEdit}
                  className="bg-black text-white px-4 py-1.5 rounded-md text-sm"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-200 px-4 py-1.5 rounded-md text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Profile image */}
            <div>
              <p className="text-sm font-medium mb-3 text-black">Profile image</p>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  {draft.profileImage ? (
                    <img
                      src={draft.profileImage}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl">🙂</span>
                  )}
                </div>

                {/* ✅ UPLOAD BUTTON */}
                <button
                  disabled={!isEditing}
                  onClick={() => fileRef.current.click()}
                  className={`border px-4 py-1.5 rounded-full text-sm text-black ${
                    !isEditing && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Upload
                </button>

                {/* ✅ HIDDEN FILE INPUT */}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Name fields */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-black">
                  First name
                </label>
                <input
                  value={draft.firstName}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setDraft({ ...draft, firstName: e.target.value })
                  }
                  className={`mt-2 w-full rounded-md px-4 py-2 text-sm text-black ${
                    isEditing ? "bg-white border" : "bg-gray-200"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-black">
                  Last name
                </label>
                <input
                  value={draft.lastName}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setDraft({ ...draft, lastName: e.target.value })
                  }
                  className={`mt-2 w-full rounded-md px-4 py-2 text-sm text-black ${
                    isEditing ? "bg-white border" : "bg-gray-200"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= SIGNIN INFORMATION ================= */}
        <div className="bg-white rounded-2xl border">
          <div className="flex items-center gap-2 px-6 py-4 border-b font-semibold text-black">
            Signin Information
            <Info size={16} className="text-gray-400" />
          </div>

          <div className="p-6 space-y-6 text-sm">
            <div>
              <label className="font-medium mb-2 block text-black">
                Registered email
              </label>
              <div className="flex items-center gap-2">
                <input
                  value={draft.email}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setDraft({ ...draft, email: e.target.value })
                  }
                  className={`flex-1 rounded-md px-4 py-2 text-black ${
                    isEditing ? "bg-white border" : "bg-gray-200"
                  }`}
                />
                <Pencil size={14} />
              </div>
            </div>

            <div>
              <label className="font-medium mb-2 block text-black">
                Registered phone number
              </label>
              <div className="flex items-center gap-2">
                <span>🇮🇳</span>
                <input
                  value={draft.phone}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setDraft({ ...draft, phone: e.target.value })
                  }
                  className={`flex-1 rounded-md px-4 py-2 text-black ${
                    isEditing ? "bg-white border" : "bg-gray-200"
                  }`}
                />
                <Pencil size={14} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Settings;
