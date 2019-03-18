# Проект фуд-стилиста Дарьи Ворониной

### Чтобы посмотреть крайнюю версию проекта - перейдите по **[этой ссылке](https://nullorone.dev/voronina)**

### Чтобы скопировать проект к себе на компьютер - следуйте дальнейшей инструкции:

**1. Нажмите зелёную кнопку в правой части экрана, чтобы скачать ZIP-архив с проектом**

![Как скачать архив с проектом](https://nullorone.dev/docs/screen_download_zip_github.jpg)

**2. Распакуйте архив у себя на компьютере**

**3. Откройте папку с распакованным проектом. Зажмите клавишу `Shift` и кликните в области папки правой кнопкой мыши. В появившемся контекстном меню необходимо выбрать пункт `Открыть окно PowerShell здесь` (** *у вас может быть другая система и командный терминал* **)**

> *У вас должна быть установлена крайняя версия Node.js.* [Установить крайнюю версию](https://nodejs.org/en/)

**4. В открывшемся окне консольного терминала введите следующую команду**

```
npm i
```
Команда установит все зависимости проекта и создаст папку **`node_modules`**.

**5. Введите следующую команду, чтобы сформировать итоговые файлы проекта**

```
npm run build
```

В корневой папке будет создана папка **`build`**, где будут располагаться все необходимые файлы для запуска проекта.
> *Файлы-исходники представлены в папке **`source`***

**6. Откройте файл `index.html` находящийся в папке `build`**

В вашем браузере откроется проект данного репозитория.

---
### Вы можете скопировать проект с помощью SSH, если у вас настроен SSH-ключ (*что это такое и зачем оно вам нужно можно узнать [здесь](https://htmlacademy.ru/blog/84-register-on-github-work-with-console)*) 

1. Скопируйте ссылку на репозиторий

![Копирование ссылки на репозиторий](https://nullorone.dev/docs/screen_ssh_github.jpg)
  
2. Введите команду у себя в консольном терминале 

```
git clone git@github.com:nullorone/voronina.git
```

У вас будет создана папка **`voronina`**

3. Перейдите в папку с помощью консольной команды

```
cd voronina
```

4. Установите все зависимости необходимые проекту с помощью консольной команды

```
npm i
```

5. Введите консольную команду, чтобы сформировать папку **`build`**, с итоговыми файлами  проекта

```
npm run build
```

6. Откройте папку **`build`** и запустите файл **`index.html`**, чтобы посмотреть проект в браузере


>*Вы также можете использовать ссылку на репозиторий через https, если ssh-ключ у вас не настроен.*
>
>*Порядок действий будет аналогичен как при использовании ssh-ключа*
>&nbsp;
