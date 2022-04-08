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

## vscode 확장도구 설치

vscod의 사이드바 영역의 확장을 선택고 확장도구를 검색하여 설치

## vscode 오프라인에서 extension 설치

1. 마켓 플레이스 접속하여 다운받고 싶은 툴 선택! https://marketplace.visualstudio.com/
2. Download Extension을 클릭하여 다운로드
3. Command Palette 열고 install from VSIX 선택
4. 로컬에 저장된 vsix 파일을 선택하여 설치

# 1. HTML 환경 설정

## [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

파일 저장시 Beautify 기능을 사용할 수 있도록 vscode 환경세팅을 변경합니다.

루트폴더의 .vscode 폴더에 settings.json 파일을 생성하고 "edirot.formatOnSave" 기능을 활성화합니다.

```
{
  "editor.formatOnSave": true
}
```

### .jsbeautifyrc 파일 설정

.jsbeautifyrc 파일에 정의된 스타일에 따라 HTML 코드를 자동으로 정리합니다. .jsbeautifyrc 파일은 프로젝트 폴더의 루트 폴더에 작성합니다.

```
{
  "html": {
    "brace_style": "collapse",
    "end_with_newline": true,
    "indent_char": " ", 
    "indent_inner_html": false,
    "indent_scripts": "normal", 
    "indent_size": 2,
    "max_preserve_newlines": 1,
    "preserve_newlines": true, 
    "wrap_line_length": 0
  }
}
```

### *rc 파일의 대한 파일 연결 구성을 편집

.jsbeautifyrc 파일의 코드 가독성을 높이기 위해서 .vscode/setting.json 파일을 수정합니다.

```
{
  "files.associations": {
  ".*rc": "jsonc",
  }
}
```


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

## HTMLHINT

https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint

HTMLHint 확장은 열려 있는 HTML 파일에서 HTMLHint를 실행하고 오류와 문제의 수를 상태바에 표시해줍니다.

문제 패널에서 세부 정보를 함께 볼 수 있습니다.

htmlhint를 사용하기 위해서는 htmlhint 확장도구 외 htmlhint node_module을 설치해야 합니다. 로컬 프로젝트 폴더에 버전을 설치하려면 npm install --save-dev htmlhint를 실행하십시오. 현재 컴퓨터에 글로벌 버전을 설치하려면 npm install --global htmlhint를 실행하십시오.


# 2. CSS 환경설정

CSScomb, Livescss, styleLint 확장도구를 설치합니다.
## [CSScomb](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb)

https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb

CSScomb 플러그인은 CSS 코딩 스타일 포맷을 자동으로 정리해 주는 기능입니다. Prettify 플러그인도 같은 기능을 제공하지만, CSScomb는 여러분의 CSS 파일을 더욱 아름답게 만들어 줍니다. 대표적인 기능은 CSS 속성을 자동으로 정렬해 주는 것입니다.

프로젝트 루트에 csscomb.json 파일에 설정 구성을 하거나, 미리 정의된 구성(csscomb, zen, yandex)을 사용할 수 있습니다. 지원되는 언어는 css, less, sass, scss입니다.

미리정의된 설정은 https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md 에서 확인 가능합니다.

### 실행

명령 팔레트에서 실행 CSSComb를 선택하거나, 단축키를 통해 실행할 수 있습니다.(Windows에서는 F1, Ctrl+Shift+P, macOS에서는 Cmd+Shift+P) 또는 파일 저장시 자동으로 실행가능하게 setting.json에 csscomb.formatOnSave": true 값을 설정할 수 있습니다.

```
{
    "csscomb.formatOnSave": true
}
```

### 지원되는 설정

`./vscode/setting.json` 파일에 미리 정의된 구성(csscomb, zen, yandex)을 설정하여 사용할 수 있습니다. 아래의 예는 미리 정의된 구성을 사용하지 않고 사용자가 설정한 csscomb.json 파일을 사용합니다.

```
{
  "csscomb.preset": "./csscomb.json"
}
```

### csscomb



