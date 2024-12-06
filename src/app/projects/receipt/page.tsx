import ContentWrapper from "@/components/content-wrapper";
import Receipt from "@/components/receipt";
import React from "react";

export default function ReceiptUI() {
  return (
    <ContentWrapper className="flex items-center justify-center h-screen">
      <Receipt className="w-[21rem] h-[24rem]" />
    </ContentWrapper>
  );
}
