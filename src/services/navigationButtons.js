const setLinks = (currentPage, url, list) => {
  const pageNum = Number(currentPage);
  // Avanza - retrocede 5 paginas
  const plusFive =
    pageNum === list.info.pages
      ? null
      : pageNum > list.info.pages - 5
      ? `${url}${list.info.pages}`
      : `${url}${pageNum + 5}`;
  const lessFive =
    pageNum === 1 ? null : pageNum < 5 ? url + 1 : `${url}${pageNum - 5}`;

  // Avanza - retrocede 1 pagina
  const nextPage = list.info.next ? `${url}${pageNum + 1}` : null;
  const prevPage = list.info.prev ? `${url}${pageNum - 1}` : null;
  return { prevPage, nextPage, plusFive, lessFive };
};

export { setLinks };
