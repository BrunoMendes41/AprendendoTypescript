//type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`Aproduct with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An User with ${uid} has a name as ${user}`);
}

type Platform = "windows" | "Linux" | "Mac Os";

let plat: Platform = "windows";

logDetails(123, "sapato");
logDetails("323", "sapaa");

logInfo(123, "Bruno");
logInfo("123", "Bruno");
