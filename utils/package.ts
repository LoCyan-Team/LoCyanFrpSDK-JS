const pkginfo = require('pkginfo')(module)

export class PackageInfo {
  static version: string = pkginfo.version
}
