# Modération

## Gestion des utilisateurs

> &#x20;Bannissement

{% swagger method="get" path="/guilds/{guildID}/{userID}" baseUrl="api.savana-project.com" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="JSON <UserData>" %}
```javascript
{
    user: {
        avatar: ?,
        username: ?,
        discriminator: ?,
        user_id: ?,
        verified: ?,
        banned: ?,
        warn: []
    },
    messages: {
        sent: ?,
        mention: ?,
        commands: ?
    }
    
}
```
{% endswagger-response %}
{% endswagger %}





