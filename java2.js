let students = {};

function addStudent() {
    const id = document.getElementById('studentId').value;
    const name = document.getElementById('studentName').value;

    try {
        if (!id || !name) {
            throw new Error("يجب ملء جميع الحقول");
        }
        if (students[id]) {
            throw new Error("معرف الطالب موجود بالفعل");
        }
        students[id] = { name: name, status: 'مسجل' };
        document.getElementById('studentId').value = '';
        document.getElementById('studentName').value = '';
        printStudents();
    } catch (error) {
        alert(`خطأ: ${error.message}`);
    }
}

function removeStudent() {
    const id = document.getElementById('removeId').value;

    try {
        if (!id) {
            throw new Error("يجب إدخال معرف الطالب");
        }
        if (!students[id]) {
            throw new Error("لم يتم العثور على معرف الطالب");
        }
        delete students[id];
        document.getElementById('removeId').value = '';
        printStudents();
    } catch (error) {
        alert(`خطأ: ${error.message}`);
    }
}

function printStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    if (Object.keys(students).length === 0) {
        studentList.innerHTML = '<li>لا يوجد طلاب في القائمة</li>';
    } else {
        for (let id in students) {
            let student = students[id];
            let li = document.createElement('li');
            li.textContent = `معرف الطالب: ${id}, اسم الطالب: ${student.name}, حالة التسجيل: ${student.status}`;
            studentList.appendChild(li);
        }
    }
}
