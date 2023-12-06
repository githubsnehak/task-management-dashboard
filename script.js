
// TOGGLE SIDEBAR

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})




//COUNT TASK
function updateTaskCounts() {
    const tables = ['zeroTable','firstTable', 'secondTable', 'thirdTable'];

    tables.forEach(tableId => {
        const table = document.getElementById(tableId);
        const rowCount = table.querySelectorAll("tbody tr").length;
        const taskCountElement = document.getElementById(`${tableId}Count`);

        if (taskCountElement) {
            taskCountElement.textContent = `Tasks: ${rowCount}`;
          
        }
       
    });
    
}
updateTaskCounts()


//PRIORITY FILTER FOR READY TASK

document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('#filter0 a[data-option]');
    const tasks = document.querySelectorAll('#table0 tbody tr');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const selectedOption = this.getAttribute('data-option').toUpperCase();

            tasks.forEach(task => {
                const priority = task.querySelector('td:nth-child(3) span').textContent.toUpperCase();

                if (priority === selectedOption || priority.startsWith(selectedOption)) {
                    task.style.display = ''; 
                } else {
                    task.style.display = 'none'; 
                }
            });
        });
    });
});

//PRIORITY FILTER FOR IN-PROGRESS TASK

document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('#filter1 a[data-option]');
    const tasks = document.querySelectorAll('#table1 tbody tr');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const selectedOption = this.getAttribute('data-option').toUpperCase();

            tasks.forEach(task => {
                const priority = task.querySelector('td:nth-child(3) span').textContent.toUpperCase();

                if (priority === selectedOption || priority.startsWith(selectedOption)) {
                    task.style.display = ''; 
                } else {
                    task.style.display = 'none'; 
                }
            });
        });
    });
});

//PRIORITY FILTER ONLY FOR TESTING TASK

document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('#filter2 a[data-option]');
    const tasks = document.querySelectorAll('#table2 tbody tr');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const selectedOption = this.getAttribute('data-option').toUpperCase();

            tasks.forEach(task => {
                const priority = task.querySelector('td:nth-child(3) span').textContent.toUpperCase();

                if (priority === selectedOption || priority.startsWith(selectedOption)) {
                    task.style.display = ''; 
                } else {
                    task.style.display = 'none'; 
                }
            });
        });
    });
});

//PRIORITY FILTER ONLY FOR DONE TASK

document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('#filter3 a[data-option]');
    const tasks = document.querySelectorAll('#table3 tbody tr');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const selectedOption = this.getAttribute('data-option').toUpperCase();

            tasks.forEach(task => {
                const priority = task.querySelector('td:nth-child(3) span').textContent.toUpperCase();

                if (priority === selectedOption || priority.startsWith(selectedOption)) {
                    task.style.display = ''; 
                } else {
                    task.style.display = 'none'; 
                }
            });
        });
    });
});



// DATE RANGE

document.addEventListener("DOMContentLoaded", function() {
    var endDateFilter = document.getElementById('endDateFilter');
    var dateFilter = document.querySelector('.date-filter');

    endDateFilter.addEventListener('click', function() {
        if (dateFilter.style.display === 'none' || dateFilter.style.display === '') {
            dateFilter.style.display = 'block'; 
        } else {
            dateFilter.style.display = 'none'; 
        }
    });
});

function filterByDate() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    filterTableByDate(startDate, endDate, '#firstTable table tbody tr');
    filterTableByDate(startDate, endDate, '#secondTable table tbody tr');
    filterTableByDate(startDate, endDate, '#thirdTable table tbody tr');
    filterTableByDate(startDate, endDate, '#zeroTable table tbody tr');
}

function filterTableByDate(startDate, endDate, tableRowsSelector) {
    var tableRows = document.querySelectorAll(tableRowsSelector);

    tableRows.forEach(row => {
        var dateColumn = new Date(row.cells[1].textContent.trim()); 
        if (!isNaN(dateColumn) && dateColumn >= startDate && dateColumn <= endDate) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });
}




// DRAG AND DROP

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("#dragRows tr");

    let dragSrc = null;

    function handleDragStart(e) {
        dragSrc = this;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = "move";
        return false;
    }

    function handleDragEnter() {
        this.classList.add("over");
    }

    function handleDragLeave() {
        this.classList.remove("over");
    }

    function handleDrop(e) {
        if (dragSrc !== this) {
            dragSrc.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData("text/html");
        }
        return false;
    }

    function handleDragEnd() {
        rows.forEach(function (row) {
            row.classList.remove("over");
        });
    }

    rows.forEach(function (row) {
        row.addEventListener("dragstart", handleDragStart, false);
        row.addEventListener("dragenter", handleDragEnter, false);
        row.addEventListener("dragover", handleDragOver, false);
        row.addEventListener("dragleave", handleDragLeave, false);
        row.addEventListener("drop", handleDrop, false);
        row.addEventListener("dragend", handleDragEnd, false);
    });
});



//SEARCH FUNCTIONALITY

document.addEventListener("DOMContentLoaded", function () {
    function performSearch() {
        const searchInput = document.getElementById("searchInput");
        const searchText = searchInput.value.trim(); 

        const allTables = document.querySelectorAll("main");

        allTables.forEach(function (table) {
            const rows = table.querySelectorAll("tbody tr");

            rows.forEach(function (row) {
                const taskName = row.querySelector("p").textContent;

                if (taskName.toLowerCase().includes(searchText.toLowerCase()) || 
                    taskName.toUpperCase().includes(searchText.toUpperCase())) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        performSearch();
    });
});


//HANDLING MEDIA QUERY

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})




if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



//SWITCH MODE (DARK MODE)
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


