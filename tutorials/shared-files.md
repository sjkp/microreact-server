# Linking to shared files on Figshare, Dropbox, and Google Drive

This tutorial shows how to link to files shared on
  * [Figshare](#figshare-shared-files),
  * [Dropbox](#dropbox-shared-files), or
  * [Google Drive](#google-drive-shared-files).

##  Figshare shared files

It is possible to link Microreact projects to files shared on Figshare.
To give Microreact server direct access to Figshare files,
shareable links obtained from Figshare should be converted to download links as follows:

1. Share your file on Figshare and obtain the sharable link (e.g. `https://figshare.com/s/add1e7fd77dfcfae787f`).

2. Open the Figshare shareable link in a web browser.

3. Locate the red **Download** button.

 ![Screen shot of Figshare Download button](/images/tutorials/figshare-dowload-button.png)

4. **Right-click** on the `Download` button.

5. From the context menu choose one of the following items:
  * `Copy Link Location` on Firefox.
  * `Copy Link Address` on Chrome.
  * `Copy Link` on Safari or Edge.
  * `Copy Shortcut` on Internet Explorer.

6. The previous step copies the download version of the link to the Clipboard (e.g. `https://ndownloader.figshare.com/files/3860726?private_link=add1e7fd77dfcfae787f`)
which can be used on Microreact upload page.

  ![Figshare link on upload page](/images/tutorials/figshare-link-on-upload-page.png)

Note: The previous steps can be used for **both data (csv or tsv) and tree (nwk) files**.

##  Dropbox shared files

Microreact can link to data (csv or tsv) and tree (nwk) files shared on Dropbox.
Shareable links obtained from Dropbox (e.g. `https://www.dropbox.com/s/isgyjgaulci4w3x/data.csv?dl=0`)
can be used directly on Microreact upload page.


##  Google Drive shared files

Microreact can also link to data (csv or tsv) and tree (nwk) files shared on Google Drive.
Shareable links obtained from Google Drive (e.g. `https://drive.google.com/file/d/0B8VUXsoIMe56bW9SaU4ycmJ1MkU/view?usp=sharing`)
can be used directly on Microreact upload page.
