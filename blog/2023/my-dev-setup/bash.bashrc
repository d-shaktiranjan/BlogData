# python & django alias
alias python='python3'
alias drs='python manage.py runserver'
alias dmm='python manage.py makemigrations'
alias dmi='python manage.py migrate'

# xampp alias
alias xampp='sudo /opt/lampp/manager-linux-x64.run'
alias mysql='/opt/lampp/bin/mysql -u root -p'
alias startserver='sudo /opt/lampp/lampp start'
alias stopserver='sudo /opt/lampp/lampp stop'

# gnome alias
alias gedit='gnome-text-editor'
alias logout='gnome-session-quit'

eval "$(starship init bash)"