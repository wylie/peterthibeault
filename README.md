# peterthibeault.com [![Build Status](https://travis-ci.org/wylie/peterthibeault.svg?branch=develop)](https://travis-ci.org/wylie/peterthibeault)

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

![Homepage: Navigation](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/homepage-nav.png)

Clicking on one of these links will scroll the page to the top of that Section.

The **Contact** and **CV** links are the only ones that will always be on the **Navigation**. The rest of the links will show up only if you have added items to it via the **Admin Interface**.

<a name="sections"></a>
### Sections

To the right of the **Navigation** are the **Sections**, which should look something like this:

![Homepage: Sections](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/homepage-section.png)

If you have a link to a Section in the **Navigation** then you will see a **Section** of the same name. Simple.

---

<a name="admin"></a>
## Admin

When you first get to the **Admin Interface** you will see a welcome screen. You can't do anything from this page other than be greeted. It should look like this:

![Admin: Welcome](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/welcome-section.png)

Your only option from here is to click on one of the links at the top.

---

<a name="works"></a>
### Works Section

The **Works** section is still being worked on, so nothing can be uploaded or edited at this time. *Documentation to come soon.*

<a name="oldworks"></a>
#### Old Works

*Documentation to come soon.*

<a name="newworks"></a>
#### New Works

*Documentation to come soon.*

---

<a name="studio"></a>
### Studio Section

The **Studio** section is up and running! It is split into two sub-sections: **New Studio** & **Old Studio**.

The **New Studio** sub-section is where you can add new images of your studio. These images will be uploaded, renamed and tagged with the date you uploaded them. As soon as you upload one of these the **Homepage** gets updated with the new image and date overlay.

The **Old Studio** sub-section is where you have the ability to manage old images, and by manage I mean delete. You can delete old **Studio** images

<a name="oldstudio"></a>
#### Old Studio

In the **Old Studio** sub-section you can see all the previous **Studio** images uploaded. You can also manage them.

![Studio: Old](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-old.png)

If you uploaded an image by accident, or decide you don't like an image from years ago you can easily delete that image. All you need to do is click on the red Delete button under the old image. *Note, this action can not be undone!* After you click the Delete button the page will remove the image and you will see all the remaining **Studio** images.

![Studio: Old - Delete](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-old-delete.png)


<a name="newstudio"></a>
#### New Studio

The **New Studio** sub-section is pretty simple. Here is what it should look like:

![Studio: New](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-new.png)

You have a **Stats** section showing you how many **Studio** images you have added.

Below the **Stats** section is a Choose File button. Clicking on this will allow you to choose an image from your computer to upload.

Below the Choose File button are two more buttons, a Save button and a Cancel button. By default the Save button is disabled. After you click the Choose File button and select an image the Save button will be enabled and turn green. The Cancel button is always active and when clicked will clear any image selected by the Choose File button.

When you have selected the image you want to add just click the green Save button and your image will be uploaded. On clicking the Save button you will see a green progress bar. This shows you that the progress of you uploading image.

After you save the new **Studio** image it will appear in the **Old Studio** section as the top-left image.

![Studio: Old - First](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/studio-old.png)

---

<a name="news"></a>
### News Section

The **News** section is up and running! It is split into two sub-sections: **New News** & **Old News**.

The **New News** sub-section is where you can add new news. These news stories will be saved and tagged with the date you saved them. As soon as you save one of these the **Homepage** gets updated with the new story and date.

The **Old News** sub-section is where you have the ability to manage old **News** stories, and by manage I mean delete. You can delete old **News** stories.

<a name="oldnews"></a>
#### Old News

In the **Old News** sub-section you can see all the previous **News** stories saved. You can also manage them. You have all your Old News stories listed starting with the newest (also with a green border) at the top, and the oldest story is at the bottom.

![News: Old](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/news-old.png)

If you saved a story by accident, or decide you don't like a story from years ago you can easily delete it. All you need to do is click on the red Delete button to the right of the text. *Note, this action can not be undone!* After you click the Delete button the page will remove the story and you will see all the remaining **News** stories.

![News: Old - Delete](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/news-old-delete.png)

<a name="newnews"></a>
#### New News

In the **New News** sub-section you can save new **News** stories.

![News: New](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/news-new.png)

You have a **Stats** section showing you how many **News** stories you have added.

Below the **Stats** section is a text area. This is where you will type in your new **News** story.

Below the text area are two buttons, a Save button and a Cancel button. By default the Save button is disabled. When you start to type a **News** story into the text area the Save button will be enabled and turn green. The Cancel button is always active and when clicked will clear the text area of any text you've written in it.

When you are finished typing in your new **News** story just click the green Save button and your story will be saved.

![News: New - Added](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/news-new-added.png)

After you save the new **News** story it will appear in the **Old News** Section as the first item and have a green border.

![News: Old - First](https://raw.githubusercontent.com/wylie/peterthibeault/gh-pages/images/news-old-first.png)



---

<a name="cv"></a>
### CV Section

The **CV** section is up and running. *More documentation to come soon.*
