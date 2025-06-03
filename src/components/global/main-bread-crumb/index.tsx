import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug: string;
};

const MainBreadCrumb = (props: Props) => {
  return (
    <div className="flex flex-col items-start">
      {props.page === "Home" && (
        <div className="flex justify-center w-full">
          {/* TODO:check the radial class in tailwind */}
          <div className="radial--gradient  w-4/12 py-5 lg:py-10 flex flex-col items-center">
            <p className="text-muted-foreground text-lg">Welcome back</p>
            <h2 className="capitalize text-4xl text-secondary font-medium">
              {props.slug}
            </h2>
          </div>
        </div>
      )}

      <span className="radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
        {PAGE_ICON[props.page.toUpperCase()]}
        <p className="font-semibold text-3xl capitalize text-secondary">
          {props.page}
        </p>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
