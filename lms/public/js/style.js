var pagination = $('#pagination')
var totalRecords = 0
var records = []
var displayRecords = []
var recordsPerPage = 5
var page = 1
var totalPages = 0

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/api/author',
  async: true,
  dataType: 'json',
  success: function (data) {
    records = data
    console.log(records)
    totalRecords = records.length
    totalPages = Math.ceil(totalRecords / recordsPerPage)
    applyPagination()
  }
})

function generateTable () {
  var tr
  $('#author_body').html('')
  for (var i = 0; i < displayRecords.length; i++) {
    tr = $('<tr/>')
    tr.append('<td>' + displayRecords[i].authorId + '</td>')
    tr.append('<td>' + displayRecords[i].authorName + '</td>')
    $('#author_body').append(tr)
  }
}

function applyPagination () {
  pagination.twbsPagination({
    totalPages: totalPages,
    visiblePages: 3,
    onPageClick: function (event, page) {
      displayRecordsIndex = Math.max(page - 1, 0) * recordsPerPage
      endRec = (displayRecordsIndex) + recordsPerPage
      displayRecords = records.slice(displayRecordsIndex, endRec)
      generateTable()
    }
  })
}


// $('#authorAdd').submit(function (event) {
//   event.preventDefault()
//   var url = $(this).attr("action");
// 	var data = $(this).serialize();
// 	$.post( url, data, function( response ) {
// 	  $("#server-results").html( response );
// 	}
// })

function darkMode () {
  document.body.setAttribute('class', 'dark')
}

function darkModeOff () {
  document.body.setAttribute('class', 'light')
}

function effectOn (id) {
  var member = document.getElementById(id)
  member.classList.add('selected')
}

function effectOff (id) {
  var member = document.getElementById(id)
  member.classList.remove('selected')
}

$(document).ready(function () { $('body').bootstrapMaterialDesign() })

jQuery(document).ready(function ($) {
  $('#year').text(new Date().getFullYear())
  $('.alert').alert()
  new WOW().init()
})
