frappe.ui.form.on("LMS Batch", {
	onload:function(frm){
    frm.set_query("student","students", function () {
        return {
            filters: {
                role_profile_name:'Student'
            },
        };
    });
}
});