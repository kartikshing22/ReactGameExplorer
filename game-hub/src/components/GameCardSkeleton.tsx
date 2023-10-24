import React from "react";
import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
