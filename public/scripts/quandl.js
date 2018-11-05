/** Collects data from the Quandl API
  * for use in letious analysis models.
 	*/
define(["jquery"], function(jquery) {

  let params = {
    start_date: "2008-01-01",
    end_date: "2018-07-26",
    column_index: 1,
    collapse: "quarterly"
  };

  const API_KEY = MY_API_KEY;
  const HOST = "https://www.quandl.com/api/v3/datasets";

  return {

    /** Uses the JQuery get() function to return
      * info from the Quandl API.
      */
      getInfo: function(database, query, _callback) {
        let url = `${HOST}/${database}/${query}.json?${$.param(params)}&api_key=${API_KEY}`;

        $.get(url, function(response) {
          _callback(response.dataset.data);
        });
      }
   }
});
