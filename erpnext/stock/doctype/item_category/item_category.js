frappe.ui.form.on("Item Category","validate",function(frm){	
	return frappe.call({
		method: "erpnext.stock.doctype.item_category.item_category.new_item_group",
		args: {
			"category_name":cur_frm.doc.category_name
		}
	})
})	