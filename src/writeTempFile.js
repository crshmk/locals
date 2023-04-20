import os from 'node:os'
import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import { equals, replace, when } from 'ramda'

const getFilePath  = filePath => {
  const dir = os.tmpdir()
  return path.join(dir, filePath)
}

const isBase64 = equals('base64')

const stripBase64Prefix = replace(/^data:image\/[a-z]+;base64,/, "")

export const writeTempFile = async (fileName, data, dataType) => {
  data = isBase64(dataType) ? stripBase64Prefix(data) : data  
  
  const filePath = getFilePath(fileName)

  await writeFile(filePath, data, dataType)

  return filePath 
}
