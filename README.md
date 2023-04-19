basic everyday js utils; not much to see in this repo 

i have some interesting js utils [here](https://github.com/crshmk/utils)

## Client 

---

### getCookies

> client 

```javascript 
getCookies()
// { k: 'v' }
```

### isEmail 

```javascript 
isEmail('me@co.com')
// true
```

### localStorage 

> assumes set item is safely stringified
```javascript 
storage.setItem('user', { email: 'me@co.com'})
storage.getItem('user')
storage.removeItem('user')
```


### scrollToSelector

> String => Function

```javascript
const scrollToFirstInvalidField = scrollToSelector('.invalid')

useEffect(scrollToFirstInvalidField, [invalidFields])
```

### stampToLabel

> String => unixTimestampMilliseconds => String

> Unless handling dates across time zones to the hour, date libraries are overkill. Some version of this is often fine.

```javascript
const timestamp = '1677104219000'

const makeMonthDayLabel = stampToLabel('md')
makeMonthDayLabel(timestamp)
// '1/22'


const makeMonthDayYearLabel = stampToLabel('mdy-')
makeMonthDayYearLabel(timestamp)
// '1-22-2023'
```


### ucFirst 

> String => String 

```javascript
ucFirst('abcDe')
// 'AbcDe'
```
## Server 

---
### log 

> a better console.log for Node using util.inspect

```javascript 
const logDepth = 3
log(nestedObject, logDepth)
```

### writeTempFile

```javascript 
const filePath = await writeTempFile(fileName,  dataUrl, 'base64')
```
