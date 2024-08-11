import { MyChart } from "./myChart";

type Props = { closeCallback: () => void };

export const CustomDialog = ({ closeCallback }: Props) => {
  return (
    <div className="z-10 absolute inset-0 bg-black bg-opacity-80">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-[800px] transform -translate-x-[24px]">
          <MyChart />
        </div>
        <button onClick={closeCallback}>OK</button>
      </div>
    </div>
  );
};
