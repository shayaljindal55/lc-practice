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