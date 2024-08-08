import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MyChart } from "./myChart";

interface Props {
  data: any;
}

export const ServerDialog: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  data,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-max">
        <DialogHeader>
          <DialogTitle>{data.caption}</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <MyChart />
        </div>
      </DialogContent>
    </Dialog>
  );
};
