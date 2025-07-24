import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumSections = [
    { name: "Главная", icon: "Home", count: 0, color: "bg-blue-500" },
    { name: "Форум", icon: "MessageSquare", count: 1247, color: "bg-blue-500" },
    { name: "Блог", icon: "BookOpen", count: 89, color: "bg-orange-500" },
    { name: "Пользователи", icon: "Users", count: 3456, color: "bg-gray-500" },
    { name: "Рейтинги", icon: "TrendingUp", count: 234, color: "bg-blue-500" },
    { name: "Правила", icon: "Shield", count: 0, color: "bg-gray-500" },
    { name: "Фотожаба", icon: "Camera", count: 567, color: "bg-orange-500" }
  ];

  const topTopics = [
    { 
      title: "Обсуждение новых правил форума", 
      author: "Модератор", 
      replies: 124, 
      views: 3456, 
      lastActivity: "2 часа назад",
      status: "moderated",
      category: "Объявления"
    },
    { 
      title: "Лучшие мемы недели - голосование", 
      author: "MemeMaster", 
      replies: 89, 
      views: 2341, 
      lastActivity: "15 минут назад",
      status: "hot",
      category: "Развлечения"
    },
    { 
      title: "Конкурс на лучшую фотожабу", 
      author: "PhotoGuru", 
      replies: 67, 
      views: 1890, 
      lastActivity: "1 час назад",
      status: "pinned",
      category: "Фотожаба"
    }
  ];

  const topUsers = [
    { name: "MemeMaster", posts: 1234, rating: 9.8, status: "online" },
    { name: "PhotoGuru", posts: 987, rating: 9.5, status: "online" },
    { name: "ForumLegend", posts: 756, rating: 9.2, status: "offline" }
  ];

  return (
    <div className="min-h-screen bg-red-500 animate-pulse">    
      {/* САЙТ ВЗЛОМАН!!! 💀 */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
        <div className="text-6xl text-red-500 font-bold animate-bounce">
          💀 HACKED 💀
        </div>
      </div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded"></div>
              <h1 className="text-2xl font-bold text-red-600 animate-spin">💀ВЗЛОМАН💀</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {forumSections.map((section) => (
                <Button key={section.name} variant="ghost" className="text-gray-600 hover:text-blue-600">
                  <Icon name={section.icon} size={16} className="mr-2" />
                  {section.name}
                  {section.count > 0 && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {section.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-blue-500 to-orange-500 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-red-300 animate-bounce">
                  ⚠️ САЙТ НЕ РАБОТАЕТ ⚠️
                </h2>
                <p className="text-lg opacity-90 mb-6 line-through">
                  ERROR 404 ERROR 404 ERROR 404 СЕРВЕР НЕДОСТУПЕН
                </p>
                <Button variant="secondary" size="lg">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Создать тему
                </Button>
              </CardContent>
            </Card>

            {/* Forum Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">0</div>
                  <div className="text-sm text-red-600">ОШИБКА</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">NaN</div>
                  <div className="text-sm text-red-600">СЛОМАНО</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-600">3,456</div>
                  <div className="text-sm text-gray-600">Пользователей</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">234</div>
                  <div className="text-sm text-gray-600">Онлайн</div>
                </CardContent>
              </Card>
            </div>

            {/* Popular Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-blue-600" />
                  Популярные темы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topTopics.map((topic, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {topic.status === "moderated" && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              <Icon name="Shield" size={12} className="mr-1" />
                              Модерация
                            </Badge>
                          )}
                          {topic.status === "hot" && (
                            <Badge variant="destructive">
                              <Icon name="Flame" size={12} className="mr-1" />
                              Горячая
                            </Badge>
                          )}
                          {topic.status === "pinned" && (
                            <Badge variant="secondary">
                              <Icon name="Pin" size={12} className="mr-1" />
                              Закреплена
                            </Badge>
                          )}
                          <Badge variant="outline">{topic.category}</Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {topic.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <span>от {topic.author}</span>
                          <span>{topic.replies} ответов</span>
                          <span>{topic.views} просмотров</span>
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Award" size={20} className="mr-2 text-orange-600" />
                  Топ пользователей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-blue-500 text-white">
                        {user.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{user.name}</span>
                        <div className={`w-2 h-2 rounded-full ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {user.posts} постов • ⭐ {user.rating}
                      </div>
                    </div>
                    <Badge variant="outline">#{index + 1}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Moderation Panel */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <Icon name="Shield" size={20} className="mr-2" />
                  Модерация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">На модерации</span>
                    <Badge variant="outline" className="text-yellow-700">12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Жалобы</span>
                    <Badge variant="outline" className="text-red-700">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Заблокированные</span>
                    <Badge variant="outline" className="text-gray-700">7</Badge>
                  </div>
                  <Separator />
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Панель модератора
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Activity" size={20} className="mr-2 text-gray-600" />
                  Активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Новый пост в "Мемы"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Пользователь регистрирован</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Загружена фотожаба</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;