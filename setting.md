# Visual Studio Code

## 
협업자 간의 동일한 코드를 작성하여 파일의 버전관리 효율을 높이고, 오류를 최소화하며  높은 퍼포먼스로 작업 속도를 늘릴 수 있도록 편집기 환경설정을
[다운로드](https://code.visualstudio.com/Download)

**환경설정의 필요성**

협업자 간의 동일한 코드 작성해야 하는 이유는 다음과 같습니다.

* 코드의 가독성 증대
* 일관성 있는 코드 작성 습관
* 파일의 버전관리 용이함
* 코드의 오류 최소화
* 높은 생산성
  
코드의 가독성 증대로 같은 파트의 작업자 및 타 파트의 작업자들과 커뮤니케이션을 원할하게 할 수 있으며, 일관성 있는 코드의 작성 습관으로 본인의 코드 작성 스타일을 정립할 수 있습니다. 또 한 협업자들과의 동일한 파일의 수정 후 버전관리를 진행할 때 일관성 있는 코드를 작성함으로 수정된 부분을 정확하게 파악하고 파일의 오류를 검사하는 확장 도구 및 설정을 통하여 높은 생산력으로 오류 없는 코드를 생산해 낼 수 있습니다.


# 1. HTML 환경 설정

## [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

.jsbeautifyrc 파일에 정의된 스타일에 따라 HTML 코드를 자동으로 정리합니다. .jsbeautifyrc 파일은 프로젝트 폴더의 루트 폴더에 작성합니다.

파일 저장시 Beautify 기능을 사용할 수 있도록 vscode 환경세팅을 변경합니다.

루트폴더의 .vscode 폴더에 settings.json 파일을 생성하고 "edirot.formatOnSave" 기능을 활성화합니다.

```
{
   "editor.formatOnSave": true
}
```

### .jsbeautifyrc 파일 설정

.jsbeautifyrc 파일의 코드 가독성을 높이기 위해서 .*rc 파일의 대한 파일 연결 구성을 편집합니다.


https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify


## [Sorting HTML and Jade attributes](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-attrs-sorter)

HTML attributes를  자동으로 정렬해주는 확장 도구를 설치합니다.

https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-attrs-sorter


**기본 정렬 값**

```
{
  "order": [
    "class", "id", "name",
    "data-.+", "ng-.+", "src",
    "for", "type", "href",
    "values", "title", "alt",
    "role", "aria-.+",
    "$unknown$"
  ]
}
```

기본 정렬 값 설정을 변경하고 싶다면 `./vscode/setting.json` 파일을 열어 수정할 수 있습니다.

```
{
  "attrsSorter.order": ["data-.+", "aria-.+", "class"]
}
```

### [multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command)

이 확장은 명령어시퀀스를 1개의 명령어로 작성하여 키를 바인드하거나 수동으로 호출할 수 있습니다.

https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command

**사용자 키바인딩 설정 파일의 경로**

맥: ~/Library/Application Support/Code/User/keybindings.json
윈도우: ~/User/{name}/AppData/Roaming/Code/User/keybindings.json

**`cmd+shift+alt+s`** 키를 누리면 `attrsSorter` 기능을 실행하고 파일을 저장하는 단축키를 설정합니다.

```
  {
    "key": "cmd+shift+alt+s",
    "command": "extension.multiCommand.execute",
    "args": {
      "sequence": ["attrsSorter.execute", "workbench.action.files.save"]
    }
  }
```

## [CSScomb](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb)

https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb

