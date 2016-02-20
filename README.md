# peterthibeault [![Build Status](https://travis-ci.org/wylie/peterthibeault.svg?branch=develop)](https://travis-ci.org/wylie/peterthibeault)

The site of artist, Peter Thibeault.

| [development](#development) | [welcome](#welcome) | [admin](#admin) | [homepage](#homepage) | [works](#works) | [studio](#studio) | [news](#news) | [cv](#cv)
| --------|-------|-------|-------|-------|-------|-------|-------|
|  |  |  | [navigation](#navigation) | [old works](#oldworks) | [old studio](#oldstudio) | [old news](#oldnews) |  |
|  |  |  | [sections](#sections) | [new works](#newworks) | [new studio](#newstudio) | [new news](#newnews) |  |

---

<a name="development"></a>
Here's what you need to do in order to get up and running on a development machine

`npm install`

`bower install`

`grunt build`

`grunt server`

---

<a name="welcome"></a>
# Welcome

This is documentation for the site [peterthibeault.com](http://peterthibeault.com) and will go over how to maintain it.

---

<a name="homepage"></a>
## Homepage

The **omepage** is the main page that users see and everything in the Admin section will show up here.

<a name="navigation"></a>
### Navigation

On the left hand of the **Homepage** we have the **Navigation**, which should look like this:

![Homepage Navigation](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/homepage-nav.png)

Clicking on one of these links will scroll the page to the top of that Section.

The **Contact** and **CV** links are the only ones that will always be on the **Navigation**. The rest of the links will show up only if you have added items to it via the **Admin Interface**.

<a name="sections"></a>
### Sections

To the right of the **Navigation** are the **Sections**, which should look something like this:

![Homepage Sections](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/homepage-section.png)

If you have a link to a Section in the **Navigation** then you will see a **Section** of the same name. Simple.

---

<a name="admin"></a>
## Admin

When you first get to the **Admin Interface** you will see a welcome screen. You can't do anything from this page other than be greeted. It should look like this:

![landing page](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/welcome-section.png)

Your only option from here is to click on one of the links at the top.

---

<a name="works"></a>
### Works Section

The **Works** section is still being worked on, so nothing can be uploaded or edited at this time. *Documentation to come soon.

<a name="oldworks"></a>
#### Old Works

*Documentation to come soon.

<a name="newworks"></a>
#### New Works

*Documentation to come soon.

---

<a name="studio"></a>
### Studio Section

The **Studio** section is up and running. *More documentation to come soon*.

<a name="oldstudio"></a>
#### Old Studio

In the **Old Studio** sub-section you can see all the previous **Studio** shots uploaded.

![Old Studio](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-old.png)

If you uploaded an image by accident, or decide you don't like an image from years ago you can easily delete that image. All you need to do is click on the red Delete button under the old image. *This action can not be undone.*

![Old Studio - Delete](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-old-delete.png)


<a name="newstudio"></a>
#### New Studio

The **New Studio** sub-section is pretty simple. Here is what it should look like:

![New Studio](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-new.png)

You have a Stats section showing you how many **Studio** shots total you have added.

Below that you have a simple form for uploading a new Studio shot. You will see that the Save button is greyed out and you are unable to click it. This is to prevent you from accidentally uploading clicking it and uploading no image. After you add an image the Save button will activate and turn green. Once you click the Save button you will see a green progress bar. This shows you that the progress of you uploading image. Once the new Studio shot has been uploaded and the data has been saved you will see the new Studio shot appear at the top left of the old Studio shots below.  

**Actions**
- Click on the `Choose File` button to select the new Studio image
- Click the, now green, Save button

---

<a name="news"></a>
### News Section

The **News** section is split into two sub-sections: New News & Old News.

<a name="oldnews"></a>
#### Old News
![Old News](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/news-old.png)

This is the **Old News** sub-section. You have all your Old News stories listed starting with the newest (also with a green border) at the top, and the oldest story is at the bottom.

Each **Old News** story has a delete button so you can, you've guessed it, delete that news story.

<a name="newnews"></a>
#### New News

---

<a name="cv"></a>
### CV Section

The **CV** section is still being worked on, so nothing can be uploaded or edited at this time.
