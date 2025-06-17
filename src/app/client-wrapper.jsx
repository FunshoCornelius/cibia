"use client";

import React, { Suspense } from "react";
import Loading from "../../loading";
import PropTypes from "prop-types";

function ClientWrapper({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

ClientWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ClientWrapper;
