import React from "react";
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const Layout = async ({ children, params }: Props) => {
  const query = new QueryClient();

  await PrefetchUserProfile(query);
  await PrefetchUserAutomations(query);

  const paramsDetails = await params;
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3 bg-black min-h-screen">
        <Sidebar slug={paramsDetails.slug} />
        {/* navbar */}
        <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto text-secondary">
          {/* {children} */}
          <Navbar slug={paramsDetails.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
