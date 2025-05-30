import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import StatusBadge from "./StatusBadge";
import photo from "../assets/ArrowRight.svg";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkleton({ length = 7 }) {
  return (
    <div className="flex flex-col gap-4 base-container">
      {Array(length)
        .fill(0)
        .map((_, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    <Skeleton className="w-[63px]  bg-slate-300 h-[16px] rounded-md" />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton className="w-[107px] bg-slate-300  h-[20px] rounded-md" />
                  </CardDescription>
                  <span>
                    <Skeleton className="w-[99px]  bg-slate-300 h-[24px] rounded-md" />
                  </span>
                  <span>
                    <Skeleton className="w-[58px]  bg-slate-300 h-[24px] rounded-md" />
                  </span>
                  <Skeleton className="w-[104px] bg-slate-300  h-[36px] rounded-md" />
                  <img src={photo} alt="Tasvir" />
                </div>
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
}
