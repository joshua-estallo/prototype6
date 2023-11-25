import os
from django.db import models
from django.utils.translation import gettext as _
from django.core.validators import FileExtensionValidator

class Dataset(models.Model):
  title = models.CharField(_("Title"), max_length=255,)
  overview = models.TextField(_("Overview"), blank=True)
  
  def __str__(self):
    return self.title