import { Icon } from "@iconify/react";

const ButtonOptions = ({ icon, title, subTitle = "" }) => {
  return (
    <div className="relative flex items-center gap-2 p-2 bg-neutral-800">
      <div className="p-3 rounded-full bg-neutral-400 ">
        <Icon icon={icon} color="white" className="text-2xl" />
      </div>
      <div>
        <h1 className="flex-1 text-xl">{title}</h1>
        <h1 className="text-sm">{subTitle}</h1>
      </div>
      <Icon
        icon="material-symbols:arrow-forward-ios-rounded"
        color="white"
        className="absolute right-0 mr-2 text-2xl"
      />
    </div>
  );
};

export default ButtonOptions;
