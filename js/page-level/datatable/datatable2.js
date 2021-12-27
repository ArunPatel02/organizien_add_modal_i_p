var simpletable;
$(window).on("load", function () {
      simpletable = $('#simpletable').DataTable({
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

                  $("#simpletable_wrapper .dataTables_filter input").appendTo(_container);
                  $("#simpletable_wrapper  .dt-filters").css("display", "none");
                  $(_container).find("input").attr('placeholder', 'Search From Table');
                  $("#simpletable_wrapper  .dt-bottom").appendTo(_bottom_container);
            }
      });



});
