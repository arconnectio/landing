/**
 * Download a file for the user
 *
 * @param content Content of the file
 * @param contentType File content-type
 * @param fileName Name of the file (with the extension)
 */
export function downloadFile(
  content: string,
  contentType: string,
  fileName: string
) {
  // create element that downloads the virtual file
  const el = document.createElement("a");

  el.setAttribute(
    "href",
    `data:${contentType};charset=utf-8,${encodeURIComponent(content)}`
  );
  el.setAttribute("download", fileName);
  el.style.display = "none";

  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}
