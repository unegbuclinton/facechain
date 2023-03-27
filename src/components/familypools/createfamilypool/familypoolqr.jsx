import qrCode from "../../../assets/images/family-pools/qrcode.png";
import copyIcon from "../../../assets/images/family-pools/copyicon.png";

const FamilyPoolQr = () => {
  return (
    <div className="bg-darkGrey text-white font-primaryFont w-full px-4 sm:px-10 py-10">
      <div className="flex justify-center mt-8">
        <div className="flex flex-col ">
          <img className="bg-primary self-center " src={qrCode} alt="" />
          <p className="text-xs mt-4">Send only USDT to this deposit address</p>
        </div>
      </div>
      <div className="mt-8 w-2/3 m-auto text-lg pb-8">
        <div className="flex justify-between mb-4">
          <p className="text-primary">Minimum Deposit</p>
          <p className="text-primary">$600</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Network</p>
          <p>Ethereum (ERC20)</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Address</p>
          <div className="flex justify-between">
            <p className="mr-2">0x0DeEAc12c..</p>
            <img className="self-center" src={copyIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPoolQr;
