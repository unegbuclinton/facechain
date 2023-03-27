import avatar from "../../../assets/images/header/avatar.jpg";

const Invites = ({ data }) => {
  const inviteList = data.map((invite, index) => (
    <div
      className="text-white flex w-full justify-between bg-[#1e1f21] px-6 py-4 rounded-md mb-4"
      key={index}
    >
      <div className="flex items-center">
        <img
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full mr-2 md:mr-6"
          src={avatar}
          alt=""
        />
        <div className="text-[#868686]">
          <p className="text-white">{invite.fullnames}</p>
          {invite.status === "Pending" ? (
            <p className="text-yellow-400">{invite.status}</p>
          ) : invite.status === "Active" ? (
            <p>Joined the Family Pool</p>
          ) : (
            <p className="text-red-400">{invite.status}</p>
          )}
        </div>
      </div>
      <div className="flex items-center ml-2">
        {invite.status === "Declined" && (
          <button className="bg-primary self-center text-black font-semibold px-4 py-2 rounded-md text-xs md:text-base">
            Resend
          </button>
        )}
      </div>
    </div>
  ));
  return <>{inviteList}</>;
};

export default Invites;
