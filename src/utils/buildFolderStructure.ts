export async function buildFolderStructure(
  folderId: string,
  driveService: any,
): Promise<any> {
  const response = await driveService.listFilesInFolder(folderId);
  const folderStructure: any = {};

  for (const file of response) {
    if (file.mimeType === 'application/vnd.google-apps.folder') {
      folderStructure[file.name] = await buildFolderStructure(
        file.id,
        driveService,
      );
    } else {
      folderStructure[file.name] = file.id;
    }
  }

  return folderStructure;
}
