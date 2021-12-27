var ticketstable;
$(window).on("load", function () {
      ticketstable = $('#ticketstable').DataTable({
            "ajax": 'js/JSON/data1.json',
            "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
            "columnDefs": [{
                  "targets": 'no-sort',
                  "orderable": false,
            }],
            "responsive":true,
            "colReorder": {
                  realtime: false
            },
            "stateSave": false,
            initComplete: function () {
                  // Move Search To Panel Header
                  let _container = $(this).parents('.console-panel').find('.get_dt_search')
                  let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

                  $("#ticketstable_wrapper .dataTables_filter input").appendTo(_container);
                  $("#ticketstable_wrapper  .dt-filters").css("display", "none");
                  $(_container).find("input").attr('placeholder', 'Search From Table');
                  $("#ticketstable_wrapper  .dt-bottom").appendTo(_bottom_container);
                  dashboardFilters();

                  $(colvis.button()).insertAfter(_container);

            }
      });

      // ======= Filters Code Start ======= //
      function dashboardFilters() {
            $(".filterhead").each(function (i) {
                  var select = $('<select multiple class="multiselect"></select>')
                  .appendTo($(this).empty())
                  .on('change', function () {
                        var term = $(this).val() || [];
                        regExSearch = '^(' + term.join('|') + ')';
                        ticketstable.column(i).search(regExSearch, true, false).draw();
                  });
                  ticketstable.column(i).data().unique().sort().each(function (d, j) {
                        d = `<span>` + d + `</span>`;
                        d = $.parseHTML(d);
                        d = $(d).text();
                        if (!$(select).find("option:contains('" + d + "')").length) {
                              select.append('<option value="' + d + '">' + d + '</option>')
                        }
                  });
            });
            $(".multiselect").SumoSelect({search: true, searchText: 'Enter here.'});
      }

      // ======= Filters Code End ======= //

      // Enable Column Show Hide Option
      var colvis = new $.fn.dataTable.ColVis(ticketstable, {
            showAll: "Restore Defaults"
      });


});
