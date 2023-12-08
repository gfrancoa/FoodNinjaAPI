export const getOffset = function (currentPage = 1, listPerPage) {
  return parseInt((currentPage - 1) * listPerPage);
};

export function validateLimit(limit) {
  if (limit && parseInt(limit) > 1) {
    return parseInt(limit);
  } else {
    return 10;
  }
}

export function validatePage(page) {
  if (page && parseInt(page) > 1) {
    return parseInt(page);
  } else {
    return 1;
  }
}

export function getPages(count, limit, page) {
  const totalPages =
    Math.ceil(count / limit) < 1 ? 1 : Math.ceil(count / limit);
  const nextPage = page + 1 > totalPages ? null : page + 1;
  const previousPage = page <= 1 ? null : page - 1;

  return { totalPages, nextPage, previousPage };
}
