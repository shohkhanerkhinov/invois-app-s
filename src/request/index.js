const baseURL = import.meta.env.VITE_BASE_URL;

// All
export async function getInvoices(route = "/invoices", query = "") {
  const req = await fetch(
    `${baseURL + route}${query ? `?status=${query}` : ""}`
  );
  if (req.status === 200) {
    const result = await req.json();

    return result.data;
  } else {
    throw new Error("Something went wrong :(");
  }
}

// Get by id
export async function getInvoice(id) {
  const req = await fetch(baseURL + `/${id}`);
  if (req.status === 200) {
    const result = await req.json();
    return result;
  } else {
    throw new Error("Something went wrong :(");
  }
}

// delete by id
export async function deleteById(id) {
  const req = await fetch(baseURL + `/${id}`, {
    method: "DELETE",
  });
  if (req.status === 200) {
    return "success";
  } else {
    throw new Error("Something went wrong :(");
  }
}

// update by id
export async function updateById(id, newData) {
  const req = await fetch(baseURL + `/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newData),
  });
  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong :(");
  }
}

//Add
export async function addInvoice(data) {
  const req = await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong :(");
  }
}
