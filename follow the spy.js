// We are tracking down our rogue agent and she travels from place to place to avoid being tracked. Each of her travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the complete route she will take.

// You are given an array of routes containing her travel itineraries. Convert this into a complete, in-order list of the places she will travel.

function trackRoute(routes) {
   // declared variable to store tracked route
  const route = [];

  routes
    .map((curr) => {
      // find start point i.e. the pair whose start point 
     // does not have any matching end point across all routes
      if (
        !routes.find((nxt) => nxt[1] === curr[0])
      ) {
        // Push start point to the 'route' array
        route.push(curr[0]);
        route.push(curr[1]);
      }
    }) 
  // Compute the next route by interating through each input route pair, 
  // comparing start point and end point of routes
    .map(() => {
      routes.map((curr) => {
        // Push next point to the 'route' array when a match is found
        curr[0] === route[route.length - 1] &&
          route.push(curr[1]);
      });
    });

  // join 'route' as comma separated string to return as output
  return route.join(", ");
}