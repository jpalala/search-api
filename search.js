module.exports = function search(data, query)  {
  return new Promise((resolve) => {
        try {
          var results = [];
          var items =  data.items;

        items.forEach(function(item, index) {
          var regex = new RegExp(query, 'ig');
          didMatch = (item.name).match(regex);
          if(didMatch !== null) {
            results.push(item.name);
          }
        });
          if(results) {
            resolve(results);
          }
        } catch {
          console.error("0 Matches");
        }
      });
}
